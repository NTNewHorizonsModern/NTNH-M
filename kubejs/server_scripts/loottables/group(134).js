LootJS.lootTables(event => {
    event.create('lootbags:group134', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('pamhc2foodextended:raisinsitem')
                .setCount([1, 4])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:dateitem')
                .setCount([1, 4])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:figitem')
                .setCount([1, 4])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:cranberryitem')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:candiedgingeritem')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:candiedlemonitem')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:figbaritem')
                .setCount([1, 3])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('pamhc2foodcore:beefjerkyitem')
                .setCount([1, 3])
                .withWeight(35)
        )
})
