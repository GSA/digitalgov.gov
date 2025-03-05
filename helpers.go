package helpers

import (
    "strings"
)

// EscapeDoubleQuotes escapes double quotes in a string
func EscapeDoubleQuotes(s string) string {
    return strings.ReplaceAll(s, `"`, `\"`)
}
