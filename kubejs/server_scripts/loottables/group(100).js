LootJS.lootTables(event => {
    event.create('lootbags:group100', LootType.GIFT)
        .firstPool()
        .rolls([2, 3])

        .addEntry(
            LootEntry.of('minecraft:paper')
                .setCount([1, 4])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:rag')
                .setCount([1, 4])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:casing_small')
                .setCount([1, 12])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:casing_large')
                .setCount([1, 12])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:casing_buckshot')
                .setCount([1, 8])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('minecraft:gunpowder')
                .setCount([1, 8])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:powder_lead')
                .setCount([1, 8])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:debris_shrapnel')
                .setCount([1, 16])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_p9_ap')
                .setCount([1, 8])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_r556_ap')
                .setCount([1, 8])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_r762_ap')
                .setCount([1, 8])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g12')
                .setCount([1, 8])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_p22_ap')
                .setCount([1, 16])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:gun_kit_1')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:casing_bag')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('minecraft:iron_ingot')
                .setCount([1, 2])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('minecraft:flint')
                .setCount([1, 4])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:stick_dynamite')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:lemon')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:debris_metal')
                .setCount([1, 1])
                .withWeight(45)
        )
})
