/*
 *
 * Class of basic functions that help speed up development.
 *
*/

class Helpers {

    /*
     *
     * Takes two array as params, compares them and return the common matches.
     *
     */
    static arrayMatches (a, b) {
        let sorted_a = a.concat().sort();
        let sorted_b = b.concat().sort();
        let common = [];
        let a_i = 0;
        let b_i = 0;

        while (a_i < a.length && b_i < b.length) {
            if (sorted_a[a_i] === sorted_b[b_i]) {
                common.push(sorted_a[a_i]);
                a_i++;
                b_i++;
            } else if(sorted_a[a_i] < sorted_b[b_i]) {
                a_i++;
            } else {
                b_i++;
            }
        }
    
        return common;
    };

    /*
     *
     * Normalizes values based on 3 paramaters.
     * - The value you want to normalize.
     * - The minimum.
     * - The maximum.
     *
    */
    static normalizeValue (val, min, max) {
        return (val - min) / (max - min);
    };

    /*
     * 
     * String cleanup
     * - Removes all white space and replaces them with '-'.
     * - Remove all special characters and accents.
     * - Make everything lowercase.
     *
    */
  static cleanString (string) {

    let map = {
        '-' : ' ',
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|É|È|Ê',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ'
    };

    string = string.toLowerCase();

    // declare outside to prevent unused-var bug
    let pattern = null;

    for (pattern in map) {
      string = string.replace(new RegExp(map[pattern], 'g'), pattern);
    }

    return string;
  };

}

export default Helpers;
