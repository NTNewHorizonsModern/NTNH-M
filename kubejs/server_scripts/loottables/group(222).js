LootJS.lootTables(event => {
    event.create('lootbags:group222', LootType.GIFT)
        .firstPool()
        .rolls([3, 6])

        .addEntry(
            LootEntry.of('hbm:stick_dynamite')
                .setCount([1, 8])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:stick_tnt')
                .setCount([1, 6])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:stick_semtex')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:stick_c4')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:n2_charge')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:red_barrel')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:pink_barrel')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:safety_fuse')
                .setCount([1, 8])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('hbm:detonator')
                .setCount([1, 1])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:detonator_multi')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:detonator_laser')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:matchstick')
                .setCount([1, 8])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_copper')
                .setCount([1, 16])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('hbm:goggles')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:no9')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_mono')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:gas_mask_filter_mono')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('hbm:defuser')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:padlock_reinforced')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:key')
                .setCount([1, 2])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:pin')
                .setCount([1, 6])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:sulfur')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:niter')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('minecraft:redstone')
                .setCount([1, 16])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_dura_steel')
                .setCount([1, 12])
                .withWeight(45)
        )
})
