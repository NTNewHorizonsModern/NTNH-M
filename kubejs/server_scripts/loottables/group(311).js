LootJS.lootTables(event => {
    event.create('lootbags:group311', LootType.GIFT)
        .firstPool()
        .rolls(1)

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group3110"},rarity="rare",treasurebags:bag_type="lootbags:type3110"]')
                .setCount(1)
                .withWeight(220)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group314"},rarity="rare",treasurebags:bag_type="lootbags:type3111"]')
                .setCount(1)
                .withWeight(160)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group315"},rarity="rare",treasurebags:bag_type="lootbags:type3112"]')
                .setCount(1)
                .withWeight(180)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group316"},rarity="rare",treasurebags:bag_type="lootbags:type3113"]')
                .setCount(1)
                .withWeight(140)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group317"},rarity="rare",treasurebags:bag_type="lootbags:type3114"]')
                .setCount(1)
                .withWeight(200)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group318"},rarity="rare",treasurebags:bag_type="lootbags:type3115"]')
                .setCount(1)
                .withWeight(120)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group319"},rarity="epic",treasurebags:bag_type="lootbags:type3116"]')
                .setCount(1)
                .withWeight(80)
        )
})
