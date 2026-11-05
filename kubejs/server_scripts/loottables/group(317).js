LootJS.lootTables(event => {
    event.create('lootbags:group317', LootType.GIFT)
        .firstPool()
        .rolls([1, 1])

        .addEntry(
            LootEntry.of('hbm:rod_uranium')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:rod_u238')
                .setCount([1, 4])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:rod_th232')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:rod_lithium')
                .setCount([1, 4])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:rod_co')
                .setCount([1, 4])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:rod_u235')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:rod_dual_u238')
                .setCount([1, 2])
                .withWeight(18)
        )

        .addEntry(
            LootEntry.of('hbm:rod_pu239')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:rod_ra226')
                .setCount([1, 1])
                .withWeight(10)
        )

        .addEntry(
            LootEntry.of('hbm:rod_dual_u235')
                .setCount([1, 1])
                .withWeight(10)
        )

        .addEntry(
            LootEntry.of('hbm:rod_quad_u238')
                .setCount([1, 1])
                .withWeight(8)
        )

        .addEntry(
            LootEntry.of('hbm:rod_quad_u235')
                .setCount([1, 1])
                .withWeight(4)
        )
})
