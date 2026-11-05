LootJS.lootTables(event => {
    event.create('lootbags:group161', LootType.GIFT)
        .firstPool()
        .rolls([3, 5])

        .addEntry(
            LootEntry.of('agricraft:wooden_crop_sticks')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('agricraft:trowel')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('agricraft:clipper')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('agricraft:magnifying_glass')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('agricraft:journal')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:powder_fertilizer')
                .setCount([1, 24])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:powder_calcium')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('minecraft:bone_meal')
                .setCount([1, 48])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('minecraft:string')
                .setCount([1, 32])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('openblocks_reborn:line')
                .setCount([1, 16])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:can_empty')
                .setCount([1, 8])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('exdeorum:crook')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('minecraft:shears')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('minecraft:flower_pot')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('minecraft:paper')
                .setCount([1, 4])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('agricraft:wooden_rake')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:canned_conserve_beef')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('exdeorum:string_mesh')
                .setCount([1, 4])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[treasurebags:bag_type="lootbags:type163",silentlib:loot_container={loot_table:"lootbags:group163"}]')
                .setCount([1, 2])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[treasurebags:bag_type="lootbags:type164",silentlib:loot_container={loot_table:"lootbags:group164"}]')
                .setCount([1, 1])
                .withWeight(20)
        )
})
