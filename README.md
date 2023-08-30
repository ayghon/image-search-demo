This is a new [**React Native**](https://reactnative.dev) project, bootstrapped
using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed
> the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a
> new
> application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the
following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_
shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Explore

This is a simple image search app with two screens:

- Home
- Results

In the Home screen:

- Enter a search term in Home's text field
- Press the Search button
- Number of likes are indicated at the bottom of the screen

In the Results screen:

- Results are paginated, scroll to the bottom of the screen to see more images
- You can pull to refresh results
- You can like images by pressing on the top right button of each image

## Step 4: Run tests

I used Detox to create a simple e2e test testing:

- First screen is Home
- Can enter a value in a field and search images
- Can handle field validation for search field
- Can like images

> For Android, use this emulator: `Pixel_6_Pro_API_33`

> For iOS, use this simulator: `iPhone 14`

# Learn More

App built with:

- [FlashList](https://shopify.github.io/flash-list/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Orval](https://orval.dev/)
- [React Query](https://tanstack.com/query/latest/)
- [React Navigation](https://reactnavigation.org/)
- [Nanostores](https://github.com/nanostores/nanostores)
- [Listly API v4](https://list.ly/api/docs#meta-search-search-images)
- [Detox](https://wix.github.io/Detox/docs/introduction/getting-started)
