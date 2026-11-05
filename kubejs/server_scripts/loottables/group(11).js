LootJS.lootTables(event => {
    event.create('lootbags:group11', LootType.GIFT)
        .firstPool()
        .rolls([3, 5])

        .addEntry(
            LootEntry.of('pamhc2crops:cottonitem')
                .setCount([1, 8])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:pill_iodine')
                .setCount([1, 12])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_stimpak')
                .setCount([1, 2])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:powder_calcium')
                .setCount([1, 8])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:filter_coal')
                .setCount([1, 3])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_antidote')
                .setCount([1, 2])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_filter_mono')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('hbm:pads_rubber')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:med_bag')
                .setCount([1, 1])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_medx')
                .setCount([1, 2])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:iv_empty')
                .setCount([1, 2])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:iv_blood')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:radx')
                .setCount([1, 3])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:hazmat_cloth')
                .setCount([1, 3])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:med_ipecac')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:five_htp')
                .setCount([1, 3])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_empty')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:pipette_laboratory')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_mono')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:goggles')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_olde')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:bottle_mercury')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_super')
                .setCount([1, 1])
                .withWeight(25)
        )
})
