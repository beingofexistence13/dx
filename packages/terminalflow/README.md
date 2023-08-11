# beingofexistence-dx

A CLI for adding components to your project.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, adds the `cn` util, configures `tailwind.config.js`, and CSS variables for the project.

```bash
npx beingofexistence-dx init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx beingofexistence-dx add [component]
```

### Example

```bash
npx beingofexistence-dx add alert-dialog
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx beingofexistence-dx add
```

## Documentation

Visit http://ui.beingofexistence.com/docs to view the documentation.

## License

Licensed under the [MIT license](https://github.com/beingofexistence/ui/blob/main/LICENSE.md).
