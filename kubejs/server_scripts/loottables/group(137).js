LootJS.lootTables(event => {
    event.create('lootbags:group137', LootType.GIFT)
        .firstPool()
        .rolls([2, 3])

        .addEntry(
            LootEntry.of('ntmspace:tea_leaf')
                .setCount([1, 6])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:tealeafitem')
                .setCount([1, 6])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:peppermintitem')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:cinnamonitem')
                .setCount([1, 3])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:candiedlemonitem')
                .setCount([1, 3])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:candiedgingeritem')
                .setCount([1, 3])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:morning_glory')
                .setCount([1, 1])
                .withWeight(1)
        )
})
