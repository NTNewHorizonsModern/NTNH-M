LootJS.lootTables(event => {
    event.create('lootbags:group251', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:rtty_pager')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('openfm:tuner')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('openfm:memory_card')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:power_net_tool')
                .setCount([1, 1])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:radio_torch_sender')
                .setCount([1, 1])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:radio_torch_receiver')
                .setCount([1, 1])
                .withWeight(1)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_vacuum_tube')
                .setCount([1, 4])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_capacitor')
                .setCount([1, 4])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_capacitor_tantalium')
                .setCount([1, 2])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:wire_fine_copper')
                .setCount([1, 16])
                .withWeight(75)
        )

        .addEntry(
            LootEntry.of('projectred_core:copper_coil')
                .setCount([1, 4])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('projectred_core:iron_coil')
                .setCount([1, 4])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:fuse')
                .setCount([1, 3])
                .withWeight(60)
        )

        .addEntry(
            LootEntry.of('minecraft:quartz')
                .setCount([1, 8])
                .withWeight(65)
        )

        .addEntry(
            LootEntry.of('minecraft:redstone')
                .setCount([1, 16])
                .withWeight(70)
        )

        .addEntry(
            LootEntry.of('hbm:screwdriver')
                .setCount([1, 1])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('projectred_transmission:red_alloy_wire')
                .setCount([1, 16])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('projectred_transmission:neutral_bundled_wire')
                .setCount([1, 8])
                .withWeight(12)
        )

        .addEntry(
            LootEntry.of('hbm:circuit_pcb')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:battery_lead')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('minecraft:repeater')
                .setCount([1, 2])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('minecraft:comparator')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('minecraft:gold_nugget')
                .setCount([1, 4])
                .withWeight(30)
        )
})
