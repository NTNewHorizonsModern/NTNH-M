LootJS.lootTables(event => {
    event.create('lootbags:group102', LootType.GIFT)
        .firstPool()
        .rolls([2, 4])

        .addEntry(
            LootEntry.of('hbm:plate_kevlar')
                .setCount([1, 2])
                .withWeight(50)
        )

        .addEntry(
            LootEntry.of('hbm:weapon_mod_special_silencer')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:weapon_mod_special_scope')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:weapon_mod_special_stack_mag')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_bmg50_ap')
                .setCount([1, 24])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_b75')
                .setCount([1, 16])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_b75_inc')
                .setCount([1, 8])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_p45_sp')
                .setCount([1, 8])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g40_demo')
                .setCount([1, 4])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g40_inc')
                .setCount([1, 3])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_rocket_he')
                .setCount([1, 3])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_rocket_demo')
                .setCount([1, 2])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_rocket_inc')
                .setCount([1, 2])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_flame_diesel')
                .setCount([1, 2])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_b75_exp')
                .setCount([1, 8])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g12_bp_magnum')
                .setCount([1, 6])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g12_bp')
                .setCount([1, 6])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_bmg50_fmj')
                .setCount([1, 16])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_nuke_standard')
                .setCount([1, 8])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_nuke_demo')
                .setCount([1, 6])
                .withWeight(15)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g12_explosive')
                .setCount([1, 8])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_standard_g12_phosphorus')
                .setCount([1, 8])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:plate_armor_hev')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:plate_armor_titanium')
                .setCount([1, 2])
                .withWeight(40)
        )

        .addEntry(
            LootEntry.of('hbm:plate_combine_steel')
                .setCount([1, 2])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:grenade_shell_frag')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:grenade_fuze_s3')
                .setCount([1, 2])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:casing_large_steel')
                .setCount([1, 12])
                .withWeight(45)
        )

        .addEntry(
            LootEntry.of('hbm:stealth_boy')
                .setCount([1, 1])
                .withWeight(30)
        )

        .addEntry(
            LootEntry.of('hbm:night_vision')
                .setCount([1, 1])
                .withWeight(20)
        )

        .addEntry(
            LootEntry.of('hbm:cordite')
                .setCount([1, 12])
                .withWeight(55)
        )

        .addEntry(
            LootEntry.of('hbm:ammo_container')
                .setCount([1, 1])
                .withWeight(25)
        )

        .addEntry(
            LootEntry.of('hbm:gun_kit_1')
                .setCount([1, 1])
                .withWeight(35)
        )

        .addEntry(
            LootEntry.of('hbm:gun_kit_2')
                .setCount([1, 1])
                .withWeight(25)
        )
})
