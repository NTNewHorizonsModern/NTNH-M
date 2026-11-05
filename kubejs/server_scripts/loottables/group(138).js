LootJS.lootTables(event => {
    event.create('lootbags:group138', LootType.GIFT)
        .firstPool()
        .rolls([1, 2])

        .addEntry(
            LootEntry.of('minecraft:sugar')
                .setCount([1, 4])
                .withWeight(90)
        )

        .addEntry(
            LootEntry.of('minecraft:sugar')
                .setCount([1, 12])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('minecraft:honey_bottle')
                .setCount([1, 3])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('pamhc2foodcore:caramelitem')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('ntmspace:chocolate_mint_billet')
                .setCount([1, 2])
                .withWeight(25)
        )
})
