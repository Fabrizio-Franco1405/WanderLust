import { StyleSheet } from 'react-native';
import { theme } from '../../styles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
    ...theme.shadows.lg,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  image: {
    width: '100%',
    height: 250,
  },
  imagePlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    backgroundColor: theme.colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  heartBtn: {
    position: 'absolute',
    top: theme.spacing.md,
    right: theme.spacing.md,
    backgroundColor: theme.colors.white,
    padding: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
    ...theme.shadows.heart,
  },
  content: {
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.text,
    flex: 1,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.ratingBg,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
  },
  ratingText: {
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.secondary,
    marginLeft: theme.spacing.xs,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  location: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.sm,
    marginLeft: theme.spacing.xs,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
    paddingTop: theme.spacing.md,
  },
  price: {
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.text,
  },
  priceSubtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textMuted,
    marginLeft: theme.spacing.xs,
  },
});