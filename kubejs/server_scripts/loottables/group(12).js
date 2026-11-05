LootJS.lootTables(event => {
    event.create('lootbags:group12', LootType.GIFT)
        .firstPool()
        .rolls([3, 6])

        .addEntry(
            LootEntry.of('hbm:pill_iodine')
                .setCount([1, 24])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:radx')
                .setCount([1, 6])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_filter')
                .setCount([1, 3])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_filter_combo')
                .setCount([1, 3])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_medx')
                .setCount([1, 3])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:plate_lead')
                .setCount([1, 6])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_super')
                .setCount([1, 2])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:dosimeter')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:hazmat_cloth_grey')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:powder_lead')
                .setCount([1, 8])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:geiger_counter')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_m65')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:hazmat_cloth_red')
                .setCount([1, 3])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:pollution_detector')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_psycho')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:pipette_boron')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('ntmspace:atmosphere_scanner')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:serum')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:hazmat_helmet')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:fmn')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:reacher')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:digamma_diagnostic')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:pill_red')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_awesome')
                .setCount([1, 1])
                .withWeight(10)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_lead')
                .setCount([1, 8])
                .withWeight(50)
        )
})
