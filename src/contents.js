/* Contents Store / Builder
 * (made to lighten html structure & improve readability)
*/

// contents store
export let contents = {
    /* template
     * (sort of documentation of contents store structure)
     *

    strenghts: [
        {
            title,
            text,
            path,
        }, ...
    ],

     */
};

// ContentType constructor
/* name - name of content (e.g: CardReviewContent, OnlineCourseCardContent...)
 * keys - keys that content object will hold (e.g: name, title, text...)
 * return - a function that allows you to bulk add contents, in a ordered and clean way
 */
function createContentType(name, keys) {

    // Create content slot
    contents[name] = [];

    // Create and return build function
    return (...paramsArrays) => {

        // Iterate between all arrays of parameters given as "paramsArrays"
        paramsArrays.forEach((paramsArray) => {

            // create single content object
            const content = {};

            // fill with given data
            keys.forEach((key, index) => {
                content[key] = paramsArray[index];
            });

            // add content object to its contents(store).section
            contents[name].push(content);
        })
    };
}

// Strength Cards
createContentType("strengths", ["title", "text", "path"]) /* (content type declaration) */
    //Content Type "fill" (bulk add operation)
    (
        [
            "Online Courses",
            "Online art coaching now offers you a very powerful way to redesign your artist mind.",
            undefined
        ],
        [
            "One to One",
            "Getting the necessary clarity about the current state to help you improve your ability.",
            undefined
        ],
        [
            "Anywhere",
            "Access to valuable and portable program which allow you to setup and live anywhere you want.",
            undefined
        ],
        [
            "On Time",
            "Punctuality is our top priority because it's an essential criteria to assess a program quality.",
            undefined,
        ]
    );