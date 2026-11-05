LootJS.lootTables(event => {
    event.create('lootbags:group43', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:bolt_steel')
                .setCount([1, 4])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('hbm:pin')
                .setCount([1, 4])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_copper')
                .setCount([1, 4])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_steel')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_aluminium')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:pads_rubber')
                .setCount([1, 4])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_lead')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('ntmspace:wire_fine_zinc')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_lead')
                .setCount([1, 4])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_dura_steel')
                .setCount([1, 4])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_spike')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:bolt_tungsten')
                .setCount([1, 4])
                .withWeight(20)
        )
})
