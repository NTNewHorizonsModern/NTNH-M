LootJS.lootTables(event => {
    event.create('lootbags:group190', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('minecraft:string')
                .setCount([1, 32])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('ags_modernmarkings:chalk')
                .setCount([1, 16])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_steel')
                .setCount([1, 32])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:pin')
                .setCount([1, 16])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('minecraft:torch')
                .setCount([1, 32])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('openblocks_reborn:line')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('storagedrawers:upgrade_template')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('minecraft:ladder')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('minecraft:oak_sign')
                .setCount([1, 8])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:crayon_black')
                .setCount([1, 6])
                .withWeight(13)
        )

        .addEntry(
            LootEntry.of('hbm:crayon_red')
                .setCount([1, 6])
                .withWeight(13)
        )

        .addEntry(
            LootEntry.of('hbm:crayon_blue')
                .setCount([1, 6])
                .withWeight(13)
        )

        .addEntry(
            LootEntry.of('hbm:crayon_yellow')
                .setCount([1, 6])
                .withWeight(13)
        )

        .addEntry(
            LootEntry.of('hbm:crayon_white')
                .setCount([1, 6])
                .withWeight(13)
        )

        .addEntry(
            LootEntry.of('storagedrawers:drawer_puller')
                .setCount([1, 1])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('storagedrawers:drawer_key')
                .setCount([1, 2])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('storagedrawers:iron_storage_upgrade')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('storagedrawers:gold_storage_upgrade')
                .setCount([1, 1])
                .withWeight(12)
        )

        .addEntry(
            LootEntry.of('storagedrawers:void_upgrade')
                .setCount([1, 1])
                .withWeight(10)
        )

        .addEntry(
            LootEntry.of('hbm:powder_sawdust')
                .setCount([1, 8])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ball_resin')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('exdeorum:crook')
                .setCount([1, 1])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('carpentersblocks:carpenters_button')
                .setCount([1, 4])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('carpentersblocks:carpenters_torch')
                .setCount([1, 8])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('carpentersblocks:carpenters_hammer')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('carpentersblocks:carpenters_chisel')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:screwdriver')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('bibliocraft:plumb_line')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('bibliocraft:tape_measure')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('bibliocraft:stockroom_catalog')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:padlock_rusty')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('minecraft:cobweb')
                .setCount([1, 2])
                .withWeight(8)
        )

        .addEntry(
            LootEntry.of('hbm:plate_iron')
                .setCount([1, 4])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('minecraft:iron_axe')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('minecraft:stick')
                .setCount([1, 8])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('exdeorum:stone_pebble')
                .setCount([1, 8])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[treasurebags:bag_type="lootbags:type43",silentlib:loot_container={loot_table:"lootbags:group43"}]')
                .setCount([1, 2])
                .withWeight(60)
        )
})
