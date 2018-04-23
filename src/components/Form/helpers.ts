import serverRendered from '../../utilities/serverRendered';

export const encodeFormData = (data: { [key: string]: string }): string | undefined => {
    if (serverRendered) return;

    return Object.keys(data)
        .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
};
