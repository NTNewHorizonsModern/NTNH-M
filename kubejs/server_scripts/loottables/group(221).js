LootJS.lootTables(event => {
    event.create('lootbags:group221', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:oil_detector')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:survey_scanner')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:geiger_counter')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('bibliocraft:clipboard')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('minecraft:paper')
                .setCount([1, 8])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('ags_modernmarkings:chalk')
                .setCount([1, 6])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('openblocks_reborn:line')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_filter_mono')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:stick_dynamite')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:safety_fuse')
                .setCount([1, 6])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:fluorite')
                .setCount([1, 4])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:sulfur')
                .setCount([1, 6])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:niter')
                .setCount([1, 6])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:gem_sodalite')
                .setCount([1, 2])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('minecraft:redstone')
                .setCount([1, 8])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:bottle_mercury')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g26_flare')
                .setCount([1, 4])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:briquette_coal')
                .setCount([1, 8])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('minecraft:ladder')
                .setCount([1, 16])
                .withWeight(45)
        )
})
