import { name, repository, version } from 'package.json'
import App from './App.svelte';

export default new App({
    target: document.body,
    props: { name, repository, version }
});