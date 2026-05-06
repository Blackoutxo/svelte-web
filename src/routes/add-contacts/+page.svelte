<script>

import { goto } from '$app/navigation';

    let name = $state('');
    let address = $state('');
    let phone = $state('');

	async function save_contact() {
	
		const response = await fetch('/api/add-contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, address, phone })
		});
	
		const result = await response.json();
		console.log(result);
		goto('/');
	}

</script>

<main class="add-contact-block">
	<div class="contact-save" style="display: flex; flex-direction: column; gap: 1rem;">
	<h1> ADDING CONTACT </h1>
		<input bind:value={name} placeholder="  Name" class="name-input" />
		<input bind:value={address} placeholder="  Address" class="address-input" />
		<input bind:value={phone} placeholder="  Phone number" class="phone-input" />
	</div>
	<div style="text-align: center; margin-top: 5rem;">
		<button onclick={save_contact} class="save-button"> Save </button>
	</div>
</main>