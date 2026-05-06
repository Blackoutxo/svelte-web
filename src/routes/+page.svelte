<script>
    import { onMount } from "svelte";


let contacts = $state([
        { 
            name: 'Test', 
            address: '123 Main St.', 
            phone: '617-000-0000' 
        }
    ]);

	async function read_contacts() {
		console.log('Reading contacts');
		const response = await fetch('/api/read-contacts', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
	
		const result = await response.json();
		console.log('Contacts: ', result.contacts);
		return result.contacts;
	}

	onMount(async () => {
		contacts = await read_contacts();
	});

	
/**
 * @param {string} name
 * @param {string} address
 * @param {string} phone
 */
	async function remove_contact(name, address, phone) {
    
		const response = await fetch('/api/remove-contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, address, phone })
		});

   		const result = await response.json();
		console.log(result);

    		if (response.ok) {
			contacts = await read_contacts();
		}
	}

</script>

<main class="contact-block">
	
	<h1> CONTACT BOOK </h1>

{#each contacts as contact}
	<div class="contact-element" style="hover:scale-105 transition-transform">
		<div class="contact-card">
                <div class="contact-info">
                    <p class="contact-name">{contact.name}</p>
                    <p>{contact.address}</p>
                    <p>{contact.phone}</p>
                </div>
                
                <button class="trash-button" onclick={() => remove_contact(contact.name, contact.address, contact.phone)}>
                    <img src="trash.svg" alt="Trash Icon" width="24px" />
                </button>
            </div>
		</div>
	{:else}
	<p class="not-found" style="text-align: center;">NO CONTACTS FOUND, ADD THEM BELOW!</p>
	{/each}

	<div class="anchor-div">	
		<a href="/add-contacts" class="contact-button"> Add Contact </a>
	</div>
</main>