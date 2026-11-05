LootJS.lootTables(event => {
    event.create('lootbags:group41', LootType.GIFT)
        .firstPool()
        .rolls([3, 5])

        .addEntry(
            LootEntry.of('hbm:wd40')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ducttape')
                .setCount([1, 2])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('openblocks_reborn:sponge_on_a_stick')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:padlock')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:key_kit')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:key_fake')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:mirror_tool')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:wrench')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:screwdriver')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:plate_steel')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:plate_copper')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:plate_aluminium')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:pipe_aluminium')
                .setCount([1, 8])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:pipe_iron')
                .setCount([1, 8])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:pipe_steel')
                .setCount([1, 6])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:pipes_steel')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:canister_full[hbm:fluid="hbm:xpjuice",hbm:fluid_amount=1000,minecraft:dyed_color={rgb:12320521,show_in_tooltip:0b}]')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:canister_full[hbm:fluid="hbm:coalgas_leaded",hbm:fluid_amount=1000,minecraft:dyed_color={rgb:1971551,show_in_tooltip:0b}]')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:ball_resin')
                .setCount([1, 3])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:pads_rubber')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:fuse')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:piston_set_steel')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('projectred_core:motor')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:weapon_mod_special_speedup')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:weapon_mod_special_sifter')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:motor')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('ntmspace:plate_stainless')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group43"},treasurebags:bag_type="lootbags:type43"]')
                .setCount([1, 2])
                .withWeight(90)
        )
})
