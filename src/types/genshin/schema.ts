import { z } from "zod";

export const WikiDataSchema = z.object({
  "retcode": z.number().int(),
  "message": z.string(),
  "data": z.object({
    "page": z.object({
      "id": z.string(),
      "name": z.string(),
      "desc": z.string(),
      "icon_url": z.string(),
      "header_img_url": z.string(),
      "modules": z.tuple([
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([
            z.object({
              "component_id": z.string(),
              "layout": z.string(),
              "data": z.object({
                "list": z.tuple([z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.tuple([z.object({
                    "ep_id": z.number().int(),
                    "icon": z.string(),
                    "amount": z.number().int(),
                    "name": z.string(),
                    "menuId": z.string(),
                    "_menuId": z.string()
                  })])]),
                  "id": z.string(),
                  "isMaterial": z.boolean()
                }),
                z.object({
                  "key": z.string(),
                  "value": z.tuple([z.string()]),
                  "id": z.string()
                })])
              }),
              "style": z.string()
            })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({
              "list": z.tuple([z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.number().int()])
                })]),
                "materials": z.array(z.any()),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                })]),
                "materials": z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })])]),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                })]),
                "materials": z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })])]),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                })]),
                "materials": z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })])]),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                })]),
                "materials": z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })])]),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                })]),
                "materials": z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })])]),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int()])
                })]),
                "materials": z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "img": z.string(),
                  "amount": z.number().int(),
                  "nickname": z.string(),
                  "menuId": z.string()
                })])]),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "combatList": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.string()])
                })]),
                "materials": z.array(z.any()),
                "id": z.string()
              })])
            }),
            "style": z.string()
          }),
          z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.record(z.any()),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({
              "pic": z.string(),
              "list": z.tuple([z.object({
                "key": z.string(),
                "img": z.string(),
                "imgDesc": z.string(),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "img": z.string(),
                "imgDesc": z.string(),
                "id": z.string()
              }),
              z.object({
                "key": z.string(),
                "img": z.string(),
                "imgDesc": z.string(),
                "id": z.string()
              })])
            }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({
              "list": z.tuple([z.object({
                "title": z.string(),
                "icon_url": z.string(),
                "desc": z.string(),
                "talent_img": z.string(),
                "talent_imgs": z.tuple([z.object({
                  "url": z.string(),
                  "description": z.string()
                })]),
                "attributes": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                })]),
                "materials": z.tuple([z.null(),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])]),
                z.tuple([z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })]),
                z.tuple([z.object({
                  "ep_id": z.number().int(),
                  "icon": z.string(),
                  "amount": z.number().int(),
                  "name": z.string()
                })])])]),
                "points": z.null(),
                "id": z.string()
              }),
              z.object({
                "title": z.string(),
                "icon_url": z.string(),
                "desc": z.string(),
                "talent_img": z.string(),
                "talent_imgs": z.tuple([z.object({
                  "url": z.string(),
                  "description": z.string()
                })]),
                "attributes": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                })]),
                "materials": z.null(),
                "points": z.null(),
                "id": z.string()
              }),
              z.object({
                "title": z.string(),
                "icon_url": z.string(),
                "desc": z.string(),
                "talent_img": z.string(),
                "talent_imgs": z.tuple([z.object({
                  "url": z.string(),
                  "description": z.string()
                })]),
                "attributes": z.tuple([z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string(),
                  z.string()])
                }),
                z.object({
                  "key": z.string(),
                  "values": z.tuple([z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int(),
                  z.number().int()])
                })]),
                "materials": z.null(),
                "points": z.null(),
                "id": z.string()
              }),
              z.object({
                "title": z.string(),
                "icon_url": z.string(),
                "desc": z.string(),
                "talent_img": z.string(),
                "talent_imgs": z.array(z.any()),
                "attributes": z.null(),
                "materials": z.null(),
                "points": z.null(),
                "id": z.string()
              }),
              z.object({
                "title": z.string(),
                "icon_url": z.string(),
                "desc": z.string(),
                "talent_img": z.string(),
                "talent_imgs": z.null(),
                "attributes": z.null(),
                "materials": z.null(),
                "points": z.null(),
                "id": z.string()
              }),
              z.object({
                "title": z.string(),
                "icon_url": z.string(),
                "desc": z.string(),
                "talent_img": z.string(),
                "talent_imgs": z.null(),
                "attributes": z.null(),
                "materials": z.null(),
                "points": z.null(),
                "id": z.string()
              }),
              z.object({
                "title": z.string(),
                "icon_url": z.string(),
                "desc": z.string(),
                "talent_img": z.string(),
                "talent_imgs": z.null(),
                "attributes": z.null(),
                "materials": z.null(),
                "points": z.null(),
                "id": z.string()
              })])
            }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({
              "list": z.tuple([z.object({
                "icon_url": z.string(),
                "name": z.string(),
                "desc": z.string(),
                "id": z.string()
              }),
              z.object({
                "icon_url": z.string(),
                "name": z.string(),
                "desc": z.string(),
                "id": z.string()
              }),
              z.object({
                "icon_url": z.string(),
                "name": z.string(),
                "desc": z.string(),
                "id": z.string()
              }),
              z.object({
                "icon_url": z.string(),
                "name": z.string(),
                "desc": z.string(),
                "id": z.string()
              }),
              z.object({
                "icon_url": z.string(),
                "name": z.string(),
                "desc": z.string(),
                "id": z.string()
              }),
              z.object({
                "icon_url": z.string(),
                "name": z.string(),
                "desc": z.string(),
                "id": z.string()
              })])
            }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.string(),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({
              "list": z.tuple([z.object({
                "title": z.string(),
                "desc": z.string()
              }),
              z.object({
                "title": z.string(),
                "desc": z.string()
              }),
              z.object({
                "title": z.string(),
                "desc": z.string()
              }),
              z.object({
                "title": z.string(),
                "desc": z.string()
              }),
              z.object({
                "title": z.string(),
                "desc": z.string()
              }),
              z.object({
                "title": z.string(),
                "desc": z.string()
              }),
              z.object({
                "title": z.string(),
                "desc": z.string()
              }),
              z.object({
                "title": z.string(),
                "desc": z.string()
              })])
            }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({
              "list": z.tuple([z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              }),
              z.object({
                "img": z.string(),
                "title": z.string(),
                "desc": z.string(),
                "audios": z.tuple([z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                }),
                z.object({
                  "id": z.string(),
                  "name": z.string(),
                  "url": z.string()
                })]),
                "id": z.string()
              })])
            }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.string(),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({ "data": z.string() }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({ "data": z.string() }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        }),
        z.object({
          "name": z.string(),
          "is_poped": z.boolean(),
          "components": z.tuple([z.object({
            "component_id": z.string(),
            "layout": z.string(),
            "data": z.object({ "data": z.string() }),
            "style": z.string()
          })]),
          "id": z.string(),
          "is_customize_name": z.boolean(),
          "is_abstract": z.boolean(),
          "is_show_switch": z.boolean(),
          "switch": z.boolean(),
          "desc": z.string(),
          "repeated": z.boolean(),
          "is_submodule": z.boolean(),
          "origin_module_id": z.string(),
          "without_border": z.boolean(),
          "can_delete": z.boolean(),
          "is_hidden": z.boolean(),
          "rich_text_editing": z.boolean()
        })]),
      "filter_values": z.object({
        "character_weapon": z.object({
          "values": z.tuple([z.string()]),
          "value_types": z.tuple([z.object({
            "id": z.string(),
            "value": z.string(),
            "mi18n_key": z.string(),
            "icon": z.string(),
            "enum_string": z.string()
          })]),
          "key": z.object({
            "key": z.string(),
            "text": z.string(),
            "values": z.array(z.any()),
            "mi18n_key": z.string(),
            "is_multi_select": z.boolean(),
            "id": z.string(),
            "is_hidden": z.boolean(),
            "updated_at": z.string()
          })
        }),
        "character_property": z.object({
          "values": z.tuple([z.string()]),
          "value_types": z.tuple([z.object({
            "id": z.string(),
            "value": z.string(),
            "mi18n_key": z.string(),
            "icon": z.string(),
            "enum_string": z.string()
          })]),
          "key": z.object({
            "key": z.string(),
            "text": z.string(),
            "values": z.array(z.any()),
            "mi18n_key": z.string(),
            "is_multi_select": z.boolean(),
            "id": z.string(),
            "is_hidden": z.boolean(),
            "updated_at": z.string()
          })
        }),
        "character_rarity": z.object({
          "values": z.tuple([z.string()]),
          "value_types": z.tuple([z.object({
            "id": z.string(),
            "value": z.string(),
            "mi18n_key": z.string(),
            "icon": z.string(),
            "enum_string": z.string()
          })]),
          "key": z.object({
            "key": z.string(),
            "text": z.string(),
            "values": z.array(z.any()),
            "mi18n_key": z.string(),
            "is_multi_select": z.boolean(),
            "id": z.string(),
            "is_hidden": z.boolean(),
            "updated_at": z.string()
          })
        }),
        "character_region": z.object({
          "values": z.tuple([z.string()]),
          "value_types": z.tuple([z.object({
            "id": z.string(),
            "value": z.string(),
            "mi18n_key": z.string(),
            "icon": z.string(),
            "enum_string": z.string()
          })]),
          "key": z.object({
            "key": z.string(),
            "text": z.string(),
            "values": z.array(z.any()),
            "mi18n_key": z.string(),
            "is_multi_select": z.boolean(),
            "id": z.string(),
            "is_hidden": z.boolean(),
            "updated_at": z.string()
          })
        }),
        "character_vision": z.object({
          "values": z.tuple([z.string()]),
          "value_types": z.tuple([z.object({
            "id": z.string(),
            "value": z.string(),
            "mi18n_key": z.string(),
            "icon": z.string(),
            "enum_string": z.string()
          })]),
          "key": z.object({
            "key": z.string(),
            "text": z.string(),
            "values": z.array(z.any()),
            "mi18n_key": z.string(),
            "is_multi_select": z.boolean(),
            "id": z.string(),
            "is_hidden": z.boolean(),
            "updated_at": z.string()
          })
        })
      }),
      "menu_id": z.string(),
      "menu_name": z.string(),
      "version": z.string(),
      "langs": z.array(z.any()),
      "template_layout": z.null(),
      "edit_lock_status": z.string(),
      "correct_lock_status": z.string(),
      "menus": z.array(z.any()),
      "template_id": z.string(),
      "ext": z.object({
        "fe_ext": z.string(),
        "post_ext": z.object({
          "post_id": z.string(),
          "post_user_name": z.string(),
          "post_time": z.string(),
          "post_avatar_url": z.string(),
          "url": z.string()
        }),
        "server_ext": z.string(),
        "personalized_color": z.string(),
        "scrolling_text": z.string(),
        "corner_mark": z.string()
      }),
      "alias_name": z.string(),
      "lang": z.string(),
      "beta": z.boolean(),
      "page_type": z.string(),
      "menu_style": z.string()
    })
  })
})