LootJS.lootTables(event => {
    event.create('lootbags:group316', LootType.GIFT)
        .firstPool()
        .rolls([1, 1])

        .addEntry(
            LootEntry.of('hbm:watz_pellet_meu')
                .setCount([1, 32])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:watz_pellet_boron')
                .setCount([1, 24])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:watz_pellet_du')
                .setCount([1, 24])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:watz_pellet_mep')
                .setCount([1, 24])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('ntmspace:watz_pellet_amf')
                .setCount([1, 16])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('ntmspace:watz_pellet_cmf')
                .setCount([1, 16])
                .withWeight(10)
        )

        .addEntry(
            LootEntry.of('ntmspace:watz_pellet_bk247')
                .setCount([1, 12])
                .withWeight(5)
        )

        .addEntry(
            LootEntry.of('hbm:watz_pellet_hes')
                .setCount([1, 1])
                .withWeight(2)
        )

        .addEntry(
            LootEntry.of('ntmspace:watz_pellet_cf251')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('ntmspace:watz_pellet_es253')
                .setCount([1, 1])
                .withWeight(1)
        )
})
