LootJS.lootTables(event => {
    event.create('lootbags:group252', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:radar_linker')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:designator')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:drone_linker')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:reactor_sensor')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:sat_chip')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:rtty_pager')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('ntmspace:hard_drive')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('opencomputers:disk')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_advanced')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('ntmspace:circuit_aero')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:magnetron')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:coil_gold_torus')
                .setCount([1, 3])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_gold')
                .setCount([1, 6])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_magnetized_tungsten')
                .setCount([1, 4])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:battery_lithium')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('minecraft:comparator')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('minecraft:gold_nugget')
                .setCount([1, 8])
                .withWeight(30)
        )
})
