export class KnowledgeBase {

    public makeShortName = (name: string): string => this._makeShortName(name);

    private _makeShortName(name: string): string {

        const final = name.trim()               // Remove whitespaces
            .normalize("NFD")                   // Returns the Unicode Normalization Form
            .replace(/[^a-zA-Z0-9 ]/g, '')      // Replace all that not is a-z, A-Z, 0-9 and whitespace
            .replace(/\s{2,}/, ' ')             // Replace consecutives whitespaces for only one
            .replace(/[ ]/g, '-')               // Replace whitespaces for '-'
            .toLowerCase();                     // Return new string in lower case format

        return final;
    }

}