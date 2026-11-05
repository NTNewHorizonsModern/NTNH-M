LootJS.lootTables(event => {
    event.create('lootbags:group310', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('ntmspace:atmosphere_scanner')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:dosimeter')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:geiger_counter')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:canned_conserve_tube')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:pill_iodine')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_stimpak')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:gun_flaregun')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:radio_torch_sender')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:radio_torch_receiver')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('hbm:radar_linker')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:photo_panel')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_gold')
                .setCount([1, 8])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_magnetized_tungsten')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('ntmspace:hard_drive')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('opencomputers:disk')
                .setCount([1, 4])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('ntmspace:circuit_aero')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_advanced')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_atomic_clock')
                .setCount([1, 1])
                .withWeight(12)
        )
})
