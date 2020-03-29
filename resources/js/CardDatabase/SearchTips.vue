<template>
    <div class="border-t border-gray-300 p-4 py-8">
        <h1 class="font-serif text-xl uppercase">Search tips</h1>
        <p class="my-4">
            The FabDB search tool is a powerful utility to help you find the cards you need, fast. It allows you to
            search for cards based on their id, name, or keywords, such as: WTR001, 11, hero, equipment, weapon,
            sword.etc. using the keywords search field. You can also find cards based on their various stats, and
            modifiers, such as: cost>0 attack=1 pitch<3 .etc. Mix and match to find the cards you need, fast!
        </p>

        <ul class="list-disc ml-4">
            <li><strong>hero</strong>: list all cards that have the keyword 'hero'. This applies to any keyword you search for.</li>
            <li><strong>WTR011</strong>: Look for card #11 within the Welcome to Rathe set</li>
            <li><strong>1</strong>: Load card #1 in any set (can also be formatted as 01 or 001</li>
            <li><strong>guardian action</strong>: Find all cards that have the keywords "guardian" and "action"</li>
            <li><strong>attack=1</strong>: Find cards that have an attack power of 1</li>
            <li><strong>pitch<2</strong>: Find cards that have a pitch value less than 2</li>
        </ul>
    </div>
</template>
