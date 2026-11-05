LootJS.lootTables(event => {
    event.create('lootbags:group135', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('pamhc2foodcore:saltitem')
                .setCount([1, 4])
                .withWeight(85)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:blackpepperitem')
                .setCount([1, 4])
                .withWeight(80)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:peppercornitem')
                .setCount([1, 4])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:mustardseedsitem')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:sesameseedsitem')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:cinnamonitem')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:gingeritem')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:currypowderitem')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:currypowderitem')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('pamhc2crops:spiceleafitem')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('pamhc2trees:nutmegitem')
                .setCount([1, 4])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:garammasalaitem')
                .setCount([1, 3])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:vanillaitem')
                .setCount([1, 3])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('pamhc2foodextended:mustarditem')
                .setCount([1, 2])
                .withWeight(30)
        )
})
