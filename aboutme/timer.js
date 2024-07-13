document.addEventListener("DOMContentLoaded", function() {
    const lastUpdatedElement = document.getElementById('last-updated');

    function updateRelativeTime() {
        const lastUpdatedTimestamp = new Date(document.lastModified);
        const currentTime = new Date();
        const timeDifference = currentTime - lastUpdatedTimestamp;

        if (timeDifference < 60000) { // Less than 1 minute
            lastUpdatedElement.textContent = `Last Updated: ${Math.floor(timeDifference / 1000)} s ago`;
        } else if (timeDifference < 3600000) { // Less than 1 hour
            lastUpdatedElement.textContent = `Last Updated: ${Math.floor(timeDifference / 60000)} min ago`;
        } else if (timeDifference < 86400000) { // Less than 1 day
            const hours = Math.floor(timeDifference / 3600000);
            lastUpdatedElement.textContent = `Last Updated: ${hours} h ago`;
        } else if (timeDifference < 2592000000) { // Less than 30 days (approx. 1 month)
            const days = Math.floor(timeDifference / 86400000);
            lastUpdatedElement.textContent = `Last Updated: ${days} day${days > 1 ? 's' : ''} ago`;
        } else if (timeDifference < 31536000000) { // Less than 1 year (approx. 12 months)
            const months = Math.floor(timeDifference / 2592000000);
            lastUpdatedElement.textContent = `Last Updated: ${months} month${months > 1 ? 's' : ''} ago`;
        } else { // More than 1 year
            const years = Math.floor(timeDifference / 31536000000);
            lastUpdatedElement.textContent = `Last Updated: ${years} year${years > 1 ? 's' : ''} ago`;
        }
    }

    // Initial update
    updateRelativeTime();

    // Update every 30 seconds to keep the text accurate
    setInterval(updateRelativeTime, 30000); // Update every 30 seconds
});
