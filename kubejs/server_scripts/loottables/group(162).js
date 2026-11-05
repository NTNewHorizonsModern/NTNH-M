LootJS.lootTables(event => {
    event.create('lootbags:group162', LootType.GIFT)
        .firstPool()
        .rolls([3, 5])

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[treasurebags:bag_type="lootbags:type164",silentlib:loot_container={loot_table:"lootbags:group164"}]')
                .setCount([1, 2])
                .withWeight(100)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[treasurebags:bag_type="lootbags:type164",silentlib:loot_container={loot_table:"lootbags:group164"}]')
                .setCount([1, 2])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[treasurebags:bag_type="lootbags:type164",silentlib:loot_container={loot_table:"lootbags:group164"}]')
                .setCount([1, 1])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[treasurebags:bag_type="lootbags:type163",silentlib:loot_container={loot_table:"lootbags:group163"}]')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:powder_fertilizer')
                .setCount([1, 24])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('agricraft:wooden_crop_sticks')
                .setCount([1, 16])
                .withWeight(50)
        )
})
