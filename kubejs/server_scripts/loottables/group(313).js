LootJS.lootTables(event => {
    event.create('lootbags:group313', LootType.GIFT)
        .firstPool()
        .rolls([1, 1])

        .addEntry(
            LootEntry.of('hbm:rbmk_pellet_ueu')
                .setCount([1, 24])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_pellet_meu')
                .setCount([1, 24])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_pellet_thmeu')
                .setCount([1, 24])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_pellet_heu235')
                .setCount([1, 20])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_pellet_mox')
                .setCount([1, 20])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_pellet_lep')
                .setCount([1, 20])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('ntmspace:rbmk_pellet_hecm')
                .setCount([1, 16])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_pellet_hes')
                .setCount([1, 1])
                .withWeight(3)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_ueu')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_meu')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_heu235')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_mox')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_hep')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_hea242')
                .setCount([1, 1])
                .withWeight(10)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_hes')
                .setCount([1, 1])
                .withWeight(2)
        )

        .addEntry(
            LootEntry.of('hbm:rbmk_fuel_drx')
                .setCount([1, 1])
                .withWeight(1)
        )
})
