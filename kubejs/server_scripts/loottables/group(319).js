LootJS.lootTables(event => {
    event.create('lootbags:group319', LootType.GIFT)
        .firstPool()
        .rolls([1, 1])

        .addEntry(
            LootEntry.of('hbm:cell_deuterium')
                .setCount([1, 8])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:cell_tritium')
                .setCount([1, 8])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:icf_pellet')
                .setCount([1, 8])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:cell_antimatter')
                .setCount([1, 1])
                .withWeight(2)
        )
})
