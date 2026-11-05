LootJS.lootTables(event => {
    event.create('lootbags:group318', LootType.GIFT)
        .firstPool()
        .rolls([1, 1])

        .addEntry(
            LootEntry.of('hbm:pellet_rtg_weak')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:pellet_rtg')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:pellet_rtg_americium')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:pellet_rtg_strontium')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:pellet_rtg_radium')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:pellet_rtg_polonium')
                .setCount([1, 1])
                .withWeight(10)
        )

        .addEntry(
            LootEntry.of('ntmspace:pellet_rtg_cf251')
                .setCount([1, 1])
                .withWeight(2)
        )
})
