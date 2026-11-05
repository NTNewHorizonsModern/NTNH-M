// kubejsstudio custom: kubejsstudio:combination/charcoal
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/combination/charcoal',
      {
        "type": "hbm:combination",
        "input": {"ingredient":"minecraft:charcoal"},
        "item_output": "minecraft:coal",
        "fluid_output": {"type":"hbm:gas_coker","amount":25},
        "order": 53
      }
    )
})
// kubejsstudio custom: hbm:combination/bedrock_ore_primary_rare
ServerEvents.generateData('after_mods', event => {
    event.json(
      'hbm:recipe/combination/bedrock_ore_primary_rare',
      {
        "type": "hbm:combination",
        "input": {"ingredient":"hbm:bedrock_ore_primary_rare"},
        "item_output": "hbm:bedrock_ore_primary_roasted_rare",
        "fluid_output": {"type":"hbm:vitriol","amount":50},
        "order": 34
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_eng_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_eng_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"minecraft:diamond"},
        "output": "ae2:printed_engineering_processor",
        "order": 48
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_silicon
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_silicon',
      {
        "type": "hbm:press",
        "stamp": "flat",
        "input": {"ingredient":"hbm:circuit_silicon"},
        "output": "ae2:printed_silicon",
        "order": 51
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_cal_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_cal_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"ae2:certus_quartz_crystal"},
        "output": "ae2:printed_calculation_processor",
        "order": 50
      }
    )
})
// kubejsstudio custom: kubejsstudio:press/printed_log_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_log_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"minecraft:gold_ingot"},
        "output": "ae2:printed_logic_processor",
        "order": 49
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/eng_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/eng_processor',
      {
        "type": "hbm:soldering",
        "output": "ae2:engineering_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"ae2:printed_engineering_processor","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 27
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/log_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/log_processor',
      {
        "type": "hbm:soldering",
        "output": "ae2:logic_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"ae2:printed_logic_processor","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 28
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/cal_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/cal_processor',
      {
        "type": "hbm:soldering",
        "output": "ae2:calculation_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"ae2:printed_calculation_processor","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 29
      }
    )
})
// kubejsstudio custom: kubejsstudio:chemical_plant/fluix_crystals
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/chemical_plant/fluix_crystals',
      {
        "type": "hbm:chemical_plant",
        "name": "chem.fluix_crystals",
        "input_items": [
          {"ingredient":"minecraft:redstone","count":4},
          {"ingredient":"minecraft:quartz","count":4},
          {"ingredient":"ae2:charged_certus_quartz_crystal","count":4}
        ],
        "input_fluids": [{"type":"minecraft:water","amount":100}],
        "output_items": [{"id":"ae2:fluix_crystal","count":8}],
        "duration": 100,
        "power": 100,
        "order": 90
      }
    )
})
// kubejsstudio custom: kubejsstudio:soldering/conc_processor
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/soldering/conc_processor',
      {
        "type": "hbm:soldering",
        "output": "extendedae:concurrent_processor",
        "duration": 90,
        "consumption": 120,
        "toppings": [
          {"ingredient":"extendedae:concurrent_processor_print","count":1},
          {"ingredient":"ae2:printed_silicon","count":1},
          {"ingredient":"minecraft:redstone","count":1}
        ],
        "solder": [{"material":"lead","shape":"wire","count":8}],
        "order": 30
      }
    )
})
// kubejsstudio custom: kubejsstudio:printed_conc_proc
ServerEvents.generateData('after_mods', event => {
    event.json('kubejsstudio:recipe/press/printed_conc_proc', {"type":"hbm:press","output":{"item":"extendedae:concurrent_processor_print"},"input":{"item":"extendedae:entro_crystal"},"stamp":"circuit"})
})
// kubejsstudio custom: kubejsstudio:press/printed_conc_proc
ServerEvents.generateData('after_mods', event => {
    event.json(
      'kubejsstudio:recipe/press/printed_conc_proc',
      {
        "type": "hbm:press",
        "stamp": "circuit",
        "input": {"ingredient":"extendedae:entro_crystal"},
        "output": "extendedae:concurrent_processor_print",
        "order": 50
      }
    )
})
