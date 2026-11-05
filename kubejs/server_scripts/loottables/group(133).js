LootJS.lootTables(event => {
    event.create('lootbags:group133', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('pamhc2crops:peanutitem')
                .setCount([1, 4])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('pamhc2foodcore:sunflowerseedsitem')
                .setCount([1, 4])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:walnutitem')
                .setCount([1, 4])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:almonditem')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:chestnutitem')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:pecanitem')
                .setCount([1, 4])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:cashewitem')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:pistachioitem')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:candiedwalnutsitem')
                .setCount([1, 3])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('pamhc2foodcore:trailmixitem')
                .setCount([1, 2])
                .withWeight(25)
        )
})
