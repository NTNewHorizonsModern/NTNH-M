// kubejsstudio item/block properties; re-apply merges by id
ItemEvents.modification(event => {
    event.modify('minecraft:wooden_axe', m => { m.setFireResistant(); m.setBurnTime(1) })
    event.modify('minecraft:wooden_shovel', m => { m.setFireResistant(); m.setBurnTime(1) })
    event.modify('minecraft:wooden_pickaxe', m => { m.setFireResistant(); m.setBurnTime(1) })
})
