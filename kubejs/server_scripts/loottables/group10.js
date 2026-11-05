LootJS.lootTables(event => {
    event.create('lootbags:group10', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:rag')
                .setCount([1, 6])
                .withWeight(100)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:cottonitem')
                .setCount([1, 4])
                .withWeight(90)
        )

        .addEntry(
            LootEntry.of('hbm:pill_iodine')
                .setCount([1, 6])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:pill_herbal')
                .setCount([1, 3])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('pamhc2foodcore:saltitem')
                .setCount([1, 6])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:pads_rubber')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:rag_damp')
                .setCount([1, 3])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:powder_coal')
                .setCount([1, 6])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('minecraft:potion[minecraft:potion_contents={potion:"minecraft:water"}]')
                .setCount([1, 1])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_empty')
                .setCount([1, 2])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:plastic_bag')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('minecraft:glass_bottle')
                .setCount([1, 2])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_antidote')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:med_ptsd')
                .setCount([1, 2])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:mask_rag')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_filter_rag')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('ntmspace:rag_blood')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_stimpak')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:syringe_metal_medx')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('minecraft:cobweb')
                .setCount([1, 2])
                .withWeight(8)
        )

        .addEntry(
            LootEntry.of('hbm:mask_piss')
                .setCount([1, 1])
                .withWeight(15)
        )
})
