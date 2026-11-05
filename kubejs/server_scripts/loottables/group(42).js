LootJS.lootTables(event => {
    event.create('lootbags:group42', LootType.GIFT)
        .firstPool()
        .rolls([3, 5])

        .addEntry(
            LootEntry.of('hbm:wrench_archineer')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:reacher')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:blowtorch')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:acetylene_torch')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:screwdriver')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:padlock_reinforced')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:key')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:plate_steel')
                .setCount([1, 8])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:plate_aluminium')
                .setCount([1, 8])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:plate_dura_steel')
                .setCount([1, 4])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:plate_copper')
                .setCount([1, 6])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:pipes_steel')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:pipe_steel')
                .setCount([1, 12])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:pipe_aluminium')
                .setCount([1, 12])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:pipe_copper')
                .setCount([1, 8])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_gold')
                .setCount([1, 8])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:motor')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:piston_set_steel')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:blade_titanium')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:blade_tungsten')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:catalytic_converter')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:industrial_magnet')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:wd40')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:canister_full[hbm:fluid="hbm:coalgas_leaded",hbm:fluid_amount=1000,minecraft:dyed_color={rgb:1971551,show_in_tooltip:0b}]')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:ducttape')
                .setCount([1, 2])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:pads_rubber')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:fuse')
                .setCount([1, 8])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('ntmspace:plate_stainless')
                .setCount([1, 6])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:plate_polymer')
                .setCount([1, 4])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_dura_steel')
                .setCount([1, 12])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_tungsten')
                .setCount([1, 8])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('treasurebags:treasure_bag[silentlib:loot_container={loot_table:"lootbags:group43"},treasurebags:bag_type="lootbags:type43"]')
                .setCount([1, 3])
                .withWeight(70)
        )
})
