LootJS.lootTables(event => {
    event.create('lootbags:group72', LootType.GIFT)
        .firstPool()
        .rolls([3, 5])

        .addEntry(
            LootEntry.of('hbm:plate_steel')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:plate_aluminium')
                .setCount([1, 4])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:plate_copper')
                .setCount([1, 3])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_copper')
                .setCount([1, 12])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_gold')
                .setCount([1, 6])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_tungsten')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:crt_display')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_controller_chassis')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_advanced')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_capacitor')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_bismoid')
                .setCount([1, 2])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_controller')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('ntmspace:circuit_avionics')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_chip')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:billet_silicon')
                .setCount([1, 6])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('opencomputers:disk')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('ntmspace:hard_drive')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:coil_gold')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:coil_gold_torus')
                .setCount([1, 3])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_atomic_clock')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('projectred_transmission:framed_red_alloy_wire')
                .setCount([1, 16])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('projectred_transmission:neutral_framed_bundled_wire')
                .setCount([1, 8])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:plate_polymer')
                .setCount([1, 4])
                .withWeight(45)
        )
})
