import { describe, expect } from '@jest/globals';
import svelteDoc from 'sveltedoc-parser';
import * as fs from 'fs';
import { createArgTypes } from './extractArgTypes';

const content = fs.readFileSync(`${__dirname}/sample/MockButton.svelte`, 'utf-8');
describe('Extracting Arguments', () => {
  it('should be svelte', () => {
    expect(content).toMatchInlineSnapshot(`
      <script>
        import { createEventDispatcher, afterUpdate } from 'svelte';
        export let text = '';
        export let rounded = true;

        const dispatch = createEventDispatcher();

        function onClick(event) {
          rounded = !rounded;

          /**
           * Click Event 
           */
          dispatch('click', event);
        }

        afterUpdate(() => {
          /**
           * After Update
           */
          dispatch('afterUpdate');
        });
      </script>
      <style>
        .rounded {
          border-radius: 35px;
        }

        .button {
          border: 3px solid;
          padding: 10px 20px;
          background-color: white;
          outline: none;
        }
      </style>
      <svelte:options accessors="{true}">
      </svelte:options>
      <button class="button"
              class:rounded
              on:click="{onClick}"
      >
        <strong>
          {rounded ? 'Round' : 'Square'} corners
        </strong>
        <br>
        {text}
        <slot {rounded}>
        </slot>
      </button>
    `);
  });

  it('should generate ArgTypes', async () => {
    const doc = await svelteDoc.parse({ fileContent: content, version: 3 });

    const results = createArgTypes(doc);

    expect(results).toMatchInlineSnapshot(`
      Object {
        "event_afterUpdate": Object {
          "action": "afterUpdate",
          "control": false,
          "description": "After Update",
          "name": "afterUpdate",
          "table": Object {
            "category": "events",
          },
        },
        "event_click": Object {
          "action": "click",
          "control": false,
          "description": "Click Event",
          "name": "click",
          "table": Object {
            "category": "events",
          },
        },
        "rounded": Object {
          "control": Object {
            "type": "boolean",
          },
          "description": undefined,
          "name": "rounded",
          "table": Object {
            "category": "properties",
            "defaultValue": Object {
              "summary": true,
            },
            "type": Object {
              "summary": "boolean",
            },
          },
          "type": Object {
            "name": "boolean",
            "required": false,
          },
        },
        "slot_default": Object {
          "control": false,
          "description": "Default Slot

      \`{rounded}\`",
          "name": "default",
          "table": Object {
            "category": "slots",
          },
        },
        "text": Object {
          "control": Object {
            "type": "text",
          },
          "description": undefined,
          "name": "text",
          "table": Object {
            "category": "properties",
            "defaultValue": Object {
              "summary": "",
            },
            "type": Object {
              "summary": "string",
            },
          },
          "type": Object {
            "name": "string",
            "required": false,
          },
        },
      }
    `);
  });
});
