<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>{{ url('') }}</loc>
        <lastmod>2019-12-19</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>{{ url('/browse/') }}</loc>
        <lastmod>2019-12-19</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>{{ url('/collection/') }}</loc>
        <lastmod>2019-12-19</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    @foreach ($cards as $card)
        <url>
            <loc>{{ url("/cards/{$card->identifier->__toString()}/") }}</loc>
            <lastmod>2019-12-19</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>
    @endforeach
</urlset>