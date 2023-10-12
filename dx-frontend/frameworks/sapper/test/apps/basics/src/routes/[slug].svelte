<script>
	import { stores } from '@sapper/app';
	const { page } = stores();
</script>

<h1>{$page.params.slug}</h1>

<a href="234">regexp route</a>
