<?php
namespace FabDB\Http\Middleware;

use Closure;
use Symfony\Component\HttpFoundation\ParameterBag;

class StripHtml
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->clean($request->query);

        if ($request->isJson()) {
            $this->clean($request->json());
        } elseif ($request->request !== $request->query) {
            $this->clean($request->request);
        }

        return $next($request);
    }

    private function cleanArray(array $input)
    {
        foreach ($input as $key => $value) {
            if (is_array($value)) {
                $input[$key] = $this->clean($value);
                continue;
            }

            $input[$key] = strip_tags($value, ['p', 'ol', 'ul', 'h1', 'h2', 'h3', 'li']);
        }

        return $input;
    }

    private function clean(ParameterBag $bag)
    {
        $bag->replace($this->cleanArray($bag->all()));
    }
}
