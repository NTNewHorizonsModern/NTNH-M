LootJS.lootTables(event => {
    event.create('lootbags:group250', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:radio_torch_sender')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:radio_torch_receiver')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('hbm:machine_siren')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:siren_track_hatch')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('hbm:gun_flaregun')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g26_flare')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('openblocks_reborn:flag')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_copper')
                .setCount([1, 16])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('minecraft:tripwire_hook')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('minecraft:string')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('openblocks_reborn:line')
                .setCount([1, 8])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('minecraft:redstone')
                .setCount([1, 16])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('minecraft:redstone_torch')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('minecraft:redstone_lamp')
                .setCount([1, 2])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('minecraft:repeater')
                .setCount([1, 2])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('minecraft:daylight_detector')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('minecraft:lever')
                .setCount([1, 2])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:fuse')
                .setCount([1, 2])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('ags_modernmarkings:chalk')
                .setCount([1, 6])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('minecraft:oak_sign')
                .setCount([1, 4])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('minecraft:paper')
                .setCount([1, 8])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('minecraft:book')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('minecraft:compass')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:padlock')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:battery_redstone')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_vacuum_tube')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('minecraft:comparator')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('minecraft:gold_nugget')
                .setCount([1, 2])
                .withWeight(25)
        )
})
