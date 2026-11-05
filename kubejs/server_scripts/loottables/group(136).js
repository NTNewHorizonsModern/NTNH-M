LootJS.lootTables(event => {
    event.create('lootbags:group136', LootType.GIFT)
        .firstPool()
        .rolls([2, 3])

        .addEntry(
            LootEntry.of('ntmspace:powder_coffee')
                .setCount([1, 6])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('ntmspace:bean_roast')
                .setCount([1, 6])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:coffeebeanitem')
                .setCount([1, 6])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('pamhc2foodcore:cocoapowderitem')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('ntmspace:bean_raw')
                .setCount([1, 4])
                .withWeight(35)
        )
})
