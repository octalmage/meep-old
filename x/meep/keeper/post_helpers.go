package keeper

import "strings"

func allowedImageURL(item string) bool {
	// No image is allowed!
	if item == "" {
		return true
	}

	lowerCaseItem := strings.ToLower(item)
	if strings.Contains(lowerCaseItem, ".png") {
		return true
	}

	if strings.Contains(lowerCaseItem, ".gif") {
		return true
	}

	if strings.Contains(lowerCaseItem, ".jpeg") {
		return true
	}

	if strings.Contains(lowerCaseItem, ".jpg") {
		return true
	}

	if strings.Contains(lowerCaseItem, ".webp") {
		return true
	}

	return false
}
