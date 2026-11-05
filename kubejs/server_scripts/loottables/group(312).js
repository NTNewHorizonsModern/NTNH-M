LootJS.lootTables(event => {
    event.create('lootbags:group312', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:blowtorch')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:acetylene_torch')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:wrench_archineer')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:reacher')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:cladding_desh')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:plate_saturnite')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:plate_armor_lunar')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:motor_desh')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:plate_titanium')
                .setCount([1, 6])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:plate_armor_titanium')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:plate_mixed')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:plate_desh')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:ingot_desh')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:wire_dense_red_copper')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:wire_dense_gold')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:wire_dense_titanium')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:wire_dense_tungsten')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:wire_dense_magnetized_tungsten')
                .setCount([1, 2])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:wire_dense_bscco')
                .setCount([1, 2])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:pipes_steel')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:blade_tungsten')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:blade_titanium')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:tank_steel')
                .setCount([1, 4])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('ae2:cable_anchor')
                .setCount([1, 16])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('ae2:quartz_fixture')
                .setCount([1, 8])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('ae2:toggle_bus')
                .setCount([1, 8])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('ae2:network_tool')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('betterp2p:advanced_memory_card')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_tungsten')
                .setCount([1, 8])
                .withWeight(45)
        )
})
