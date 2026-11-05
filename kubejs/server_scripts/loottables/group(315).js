LootJS.lootTables(event => {
    event.create('lootbags:group315', LootType.GIFT)
        .firstPool()
        .rolls([1, 1])

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_natural_uranium_fuel')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_uranium_fuel')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_thorium_fuel')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_mox_fuel')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_u235_fuel')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_plutonium_fuel')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_tritium')
                .setCount([1, 2])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:rod_zirnox_les_fuel')
                .setCount([1, 1])
                .withWeight(3)
        )
})
