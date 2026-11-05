LootJS.lootTables(event => {
    event.create('lootbags:group314', LootType.GIFT)
        .firstPool()
        .rolls([1, 1])

        .addEntry(
            LootEntry.of('hbm:pwr_fuel_meu')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:pwr_fuel_heu235')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:pwr_fuel_mox')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:pwr_fuel_hep239')
                .setCount([1, 1])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:pwr_fuel_hen237')
                .setCount([1, 1])
                .withWeight(12)
        )

        .addEntry(
            LootEntry.of('hbm:pwr_fuel_hea242')
                .setCount([1, 1])
                .withWeight(8)
        )

        .addEntry(
            LootEntry.of('hbm:pwr_fuel_hes326')
                .setCount([1, 1])
                .withWeight(2)
        )
})
